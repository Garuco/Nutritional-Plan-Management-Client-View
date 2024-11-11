import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export interface PatientData {
    name: string;
    lastname: string; // Only one last name
    birthdate: string;
    startDate: string;
    goal: string;
    email: string;
    phoneNumber: string;
    password: string;
    nextAppointment: string;
}

// Servicio de autenticación de pacientes
export const loginPatient = async (
    email: string,
    password: string
): Promise<{ success: boolean; patientData?: PatientData }> => {
    try {
        //console.log("Iniciando búsqueda de paciente con email:", email);

        // Obtener la colección de administradores
        const administratorsRef = collection(db, "administrators");
        const administratorsSnapshot = await getDocs(administratorsRef);

        // Recorrer cada administrador
        for (const adminDoc of administratorsSnapshot.docs) {
            const userId = adminDoc.id;

            // Referencia a la colección de pacientes del administrador
            const patientsRef = collection(db, "administrators", userId, "patients");

            // Query para buscar el paciente con el correo y contraseña especificados
            const patientQuery = query(
                patientsRef,
                where("email", "==", email),
                where("password", "==", password)
            );

            const patientSnapshot = await getDocs(patientQuery);

            // Verificar si se encontró un paciente con las credenciales dadas
            if (!patientSnapshot.empty) {
                const patientDoc = patientSnapshot.docs[0]; // Tomar el primer documento que coincida
                const patientData = patientDoc.data() as PatientData;

                return {
                    success: true,
                    patientData, // Retorna los datos del paciente
                };
            }
        }

        return { success: false };
    } catch (error) {
        throw new Error("Failed to log in.");
    }
};
