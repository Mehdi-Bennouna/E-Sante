import AcceuilIcon from '../../../assets/icons/SideBar/Acceuil.svg';
import PatientsIcon from '../../../assets/icons/SideBar/Patients.svg';
import RdvIcon from '../../../assets/icons/SideBar/Rdv.svg';
import SalleIcon from '../../../assets/icons/SideBar/Salle.svg';
// import TestsIcon from '../../../assets/icons/SideBar/Tests.svg';
import MedecinIcon from '../../../assets/icons/SideBar/Salle.svg';
import AssistantIcon from '../../../assets/icons/SideBar/Salle.svg';


export const assistantBar = [
    {
        title: 'Acceuil',
        icon: AcceuilIcon,
        link: '/Acceuil',
    },
    {
        title: 'Patients',
        icon: PatientsIcon,
        link: '/Patients',
    },
    {
        title: 'Rendez-vous',
        icon: RdvIcon,
        link: '/Rendez-vous',
    },
    {
        title: "Salle d'attente",
        icon: SalleIcon,
        link: '/Salle',
    },
];

export const medecinBar = [
    {
        title: "Acceuil",
        icon: AcceuilIcon,
        link: "/Acceuil",
    },
    {
        title: "Patients",
        icon: PatientsIcon,
        link: "/Patients",
    },

    {
        title: "Rendez-vous",
        icon: RdvIcon,
        link: "/Rendez-vous",
    },
    {
        title: "Salle d'attente",
        icon: SalleIcon,
        link: "/Salle",
    },
];

export const adminBar = [
    {
        title: "Medecins",
        icon: MedecinIcon,
        link: "/Medecins",
    },
    {
        title: "Assistants",
        icon: AssistantIcon,
        link: "/Assistants",
    },
];