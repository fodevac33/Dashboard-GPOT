import { ReactNode } from "react";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SpeedIcon from '@mui/icons-material/Speed';
import HomeIcon from '@mui/icons-material/Home';
import ElectricMeterIcon from '@mui/icons-material/ElectricMeter';



export interface DropDownItem {
  title?: string;
  path: string;
  icon: ReactNode;
  iconClosed?: ReactNode;
  iconOpened?:  ReactNode;
  subnav?: DropDownItem[];
}


export const DropDownItem: DropDownItem[] = [
  { 
    title: "Inicio",
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: "Acu",
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    path: '#',
    icon: <ElectricMeterIcon />,


    subnav: [
      {
        title: 'VCP',
        path: '/acu/vcp',   
        icon: <OfflineBoltIcon/>  
      },
      {
        title: 'Energías',
        path: '/acu/energies',
        icon: <OfflineBoltIcon />  
      },
    ],

  },
  {	
    title: "Circuitor",
    path: '#',
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    icon: <SpeedIcon />,
    
    subnav:[
      {
        title: "VCP",
        path: '/circuitor/vcp',
        icon: <SpeedIcon/>
      },
      {
        title: "Fasores",
        path: '/circuitor/phasors',
        icon: <SpeedIcon/>
      },
      {
        title: "Potencias",
        path: '/circuitor/power',
        icon: <SpeedIcon/>
      }
    ]
  },
];
