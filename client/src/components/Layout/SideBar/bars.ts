import acceuilIcon from '../../../assets/icons/Sidebar/Acceuil.svg';
import patientIcon from '../../../assets/icons/Sidebar/Patients.svg';
import rdvIcon from '../../../assets/icons/Sidebar/Rendez-vous.svg';
import salleIcon from '../../../assets/icons/Sidebar/Salle.svg';

export const assistantBar = [
    {
        title: 'Acceuil',
        icon: acceuilIcon,
        link: '/Acceuil',
    },
    {
        title: 'Patient',
        icon: patientIcon,
        link: '/Patients',
    },
    {
        title: 'Rendez-vous',
        icon: rdvIcon,
        link: '/Rendez-vous',
    },
    {
        title: "Salle d'attente",
        icon: salleIcon,
        link: '/Salle',
    },
];
