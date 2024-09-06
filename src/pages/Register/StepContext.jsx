import { createContext, useState } from "react";
export const MultiStepContext = createContext();
export default function StepContext({children}) {
    const [currStep, setCurrStep] = useState(1);
    const [userData, setUserData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        college: "NITS",
        collegename : "",
        enrollmentNumber: "",
        address: "",
        totalPrice: 0,
      });
    const [finalData, setFinalData] = useState({});
    const submitData = () => {
        console.log(userData);
    };
    return (
        <>
            <MultiStepContext.Provider value={{ currStep, setCurrStep, userData, setUserData, finalData, setFinalData, submitData }}>
                {children}
            </MultiStepContext.Provider>
        </>
    );
}