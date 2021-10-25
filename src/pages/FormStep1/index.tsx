import * as C from './styled'
import { Theme } from '../../components/Theme';
import { useHistory } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';


export const FormStep1 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    // eslint-disable-next-line
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 1,
    });
  }, [])



  const handleNextStep = () => {
    if (state.name !== '') {
      history.push('/step2')
    }
    else {
      alert("Digite o Nome");
    }


  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line
    dispatch({
      type: FormActions.setName,
      payload: e.target.value,
    });
  }


  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>Vamos comecar com seu Nome</h1>
        <p>Preencha o campo abaixo com seu nome completo</p>

        <hr />
        <label>
          Seu Nome Completo
          <input
            type="text"
            autoFocus
            value={state.name}
            onChange={handleNameChange}

          />
        </label>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>

  );
}