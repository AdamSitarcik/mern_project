import { useState } from "react";
import { useAppContext } from '../context/appContext';
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = () => {
    const [barChart, setBarChart] = useState(true);
    const { monthlyApplications: data } = useAppContext();

    return (
        <Wrapper>
            <h4>Monthly applications</h4>
            <button type='button' onClick={()=>setBarChart(!barChart)}>
                {barChart ? 'Area chart' : 'Bar chart'}
            </button>
            {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
        </Wrapper>);
};

export default ChartsContainer;