import * as C from './styled'
import { Theme } from '../../components/Theme';
import { useHistory, Link } from 'react-router-dom';
import { useForm, FormActions } from '../../contexts/FormContext'
import { ChangeEvent, useEffect } from 'react';


export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    // eslint-disable-next-line
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 3,
    });
  }, [])



  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      console.log(state)
    } else {
      alert('Preencha os dados')
    }
  }

  const handlEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  }

  const handlGithubChange = (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  }


  return (
    <Theme>
      <C.Container>
        <p>Passo {state.currentStep}/3</p>
        <h1>legal {state.name} onde te achamos? </h1>
        <p>Preencha o e-mail e o Github. </p>

        <hr />
        <label>
          qual seu E-mail?
          <input
            type="email"
            value={state.email}
            onChange={handlEmailChange}

          />
        </label>
        <label>
          Qual seu Github?
          <input
            type="url"
            value={state.github}
            onChange={handlGithubChange}

          />
        </label>

        <Link to="/step2" className="backButton"> Voltar </Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </C.Container>
    </Theme>

  );
}