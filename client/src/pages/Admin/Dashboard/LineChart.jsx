import { useMemo } from "react";

import{
    Chart as ChartJS, 
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    ArcElement, 
    Tooltip, 
    Legend, 
    Filler
} from "chart.js"; // Elemetos para graficos

import { Line } from "react-chartjs-2"; // para el grafico

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
); // tengo que registar, para su uso

let scores= [1, 2, 2, 3, 3, 4, 3]; //puntos
let descargas= [0, 3, 1, 0, 2, 1, 4] 
let labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

const options ={
    responsive: true,
    fill: true,
    plugins:{
        legend:{
            display:true,
            labels: {
                color: 'rgba(255, 255, 255, 0.6)',
                font:{
                    size:12,
                }
            },
        },
    },
    scales:{
        y:{
            min:0,
        },
    },
};

export default function LineChart(){
    const data = useMemo( function(){
        return {
            datasets:[
                {
                    label: 'Registered users per day',
                    data: scores,
                    tension: 0.2,
                    borderColor: '#ffadad',
                    borderWidth: 1,
                    pointRadius: 1.5,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    
                },
                {
                    label: 'Downloads per day',
                    data: descargas,
                    tension: 0.15,
                    borderColor: '#52b788',
                    borderWidth: 1,
                    pointRadius: 1.5,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                }
            ],
            labels,
        }
    }, []);
    return <Line data={data} options={options}/>
}