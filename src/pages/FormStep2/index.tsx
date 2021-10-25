import * as C from './styled'
import { Theme } from '../../components/Theme';
import { useHistory, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';


export const FormStep2 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    // eslint-disable-next-line
    if (state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 2,
      });
    }

  }, [])



  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step3')
    }
    else {
      alert("Digite o Nome");
    }
  }


  const setlevel = (level: number) => {
    // eslint-disable-next-line
    dispatch({
      type: FormActions.setLevel,
      payload: level,
    });

  }




  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>{state.name} o que descreve você?</h1>
        <p>Selecione o seu estado atual</p>

        <hr />

        <SelectOption
          title="Sou Iniciante"
          description='Começei Programar à 2 anos.'
          icon="🥳"
          selected={state.level === 0}
          onClick={() => setlevel(0)}
        />

        <SelectOption
          title="Sou Programador"
          description='Programo à mais de 2 anos'
          icon="😎"
          selected={state.level === 1}
          onClick={() => setlevel(1)}
        />


        <Link to="/" className="backButton"> Voltar </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>

  );
}