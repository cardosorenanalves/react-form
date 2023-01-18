import dayjs, { Dayjs } from 'dayjs';
import { toast } from 'react-toastify';
import { validateEmail } from '../utils/validateEmail';
import { telefonemask } from '../utils/telefone';
import { useState } from 'react';

export interface IValue {
    label: string
}

export function UseForm(){
    const [value, setValue] = useState<Dayjs | null>(dayjs());
    const [name, setName] = useState<string>('');  
    const [email, setEmail] = useState<string>('');
    const [tel, setTel] = useState<string>('');
    const [bairro, setBairro] = useState<IValue>({label: ''});
    const [disponibilit, setDisponibilit] = useState<IValue>({label: ''});
    const [checkConfirm, setCheckConfirm] = useState<boolean>(true);
    const [nameErr, setNameErr] = useState<boolean>(false);  
    const [emailErr, setEmailErr] = useState<boolean>(false); 
    const [telErr, setTelErr] = useState<boolean>(false); 
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };
 
    function handleSubmit(){
        setIsLoading(true);
        resetError();
        if(!name){
            setNameErr(true);
            setIsLoading(false);
        }
        if(!email || !validateEmail(email)){
             setEmailErr(true);
             setIsLoading(false);
        }
        if(!tel || telefonemask(tel)?.length as number < 17){
             setTelErr(true);
             setIsLoading(false);
        }

        if(
            tel 
            && telefonemask(tel)?.length as number === 17 
            && email
            && validateEmail(email)
            && name
        ){    
            const register = {
                nome: name,
                email: email,
                telefone: tel,
                dataDeNascimento: value?.format('DD/MM/YYYY'),
                bairro: bairro ? bairro : 'Qualquer',
                disponibilidade: disponibilit ? disponibilit : 'Qualquer',
                contatoTel: checkConfirm ? 'Sim' : 'Não'
            };
            console.log(register);
            setTimeout(()=>{
                toast('Cadastrado com sucesso!', {progressStyle:{background:'#ed6c02'}});
                setName('');
                setEmail('');
                setTel('');
                setValue(dayjs());
                setBairro({label: ''});
                setDisponibilit({label: ''});
                setCheckConfirm(true);
                setIsLoading(false);
            }, 2000);  
        }        
    }

    function resetError(){
        setNameErr(false);
        setEmailErr(false);
        setTelErr(false);
    }

    return{
        nameErr,
        name,
        setName,
        emailErr,
        email,
        setEmail,
        telErr,
        setTel,
        tel,
        value,
        handleChange,
        bairro,
        setBairro,
        setDisponibilit,
        disponibilit,
        checkConfirm,
        setCheckConfirm,
        handleSubmit,
        isLoading
    };
}