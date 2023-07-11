import { ReactNode } from "react";
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import SpeedIcon from '@mui/icons-material/Speed';
import HomeIcon from '@mui/icons-material/Home';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import TimelineIcon from '@mui/icons-material/Timeline';

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
    icon: <TimelineIcon />,


    subnav: [
      {
        title: 'VCP',
        path: '/acu/vcp',   
        icon: <OfflineBoltIcon/>  
      },
      {
        title: 'Energías',
        path: '/acu/energies',
        icon: <ElectricBoltIcon />  
      },
    ],

  },
  {	
    title: "Circuitor",
    path: '#',
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    icon: <MultilineChartIcon/>,
    
    subnav:[
      {
        title: "VCP",
        path: '/circuitor/vcp',
        icon: <OfflineBoltIcon/>
      },
      {
        title: "Fasores",
        path: '/circuitor/phasors',
        icon: <SpeedIcon/>
      },
      {
        title: "Potencias",
        path: '/circuitor/power',
        icon: <LocalParkingIcon/>
      }
    ]
  },
];
