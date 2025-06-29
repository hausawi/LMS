import { useState } from 'react';
import Stepper from '../../components/registeration/Stepper';
import StepperControl from '../../components/registeration/StepperControl';
import { Account } from '../../components/registeration/steps/Account';
import { Details } from '../../components/registeration/steps/Details';
import { Final } from '../../components/registeration/steps/Final';
import { StepperContext } from '../../context/stepperContext';

const RegisterationPage = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [userData, setUserData] = useState('')
    const [finalData, setFinalData]= useState([])
    

    const steps = ['Account information', 'Personal Details', 'Complete'];
    
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Account />
            case 2:
                return <Details />
            case 3:
                return <Final />
    }
    }
    
    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        //check if steps are within bounde

        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }
	return (
		<div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white'>
			{/* Stepper */}
			<div className='container horizontal mt-5'>
				<Stepper steps={steps} currentStep={currentStep} />
			</div >
			{/* Display Components */}
			<div className='my-10 p-10'>
                <StepperContext.Provider value={{
                    userData, setUserData,finalData,setFinalData
                }}>
					{displayStep(currentStep)}
				</StepperContext.Provider>
			</div>
            {/* Navigation controls */}
            {currentStep !== steps.length && 
			<StepperControl
				handleClick={handleClick}
				currentStep={currentStep}
				steps={steps}
			/>}
		</div>
	);
};

export default RegisterationPage;
