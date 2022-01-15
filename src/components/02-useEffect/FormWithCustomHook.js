
import { useForm } from '../../hooks/useForm';
import './effects.css';


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formValues)
    }
    
    
    return (
        <>
              <h1>Form Custom hook</h1>
              <hr />

              <form className='container' onSubmit={ handleSubmit }>
                  <input
                    type="text"
                    name="name"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                    >
                  </input>

                  <input
                    type="text"
                    name="email"
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                    >
                  </input>

                  <input
                    type="password"
                    name="password"
                    className='form-control'
                    placeholder='******'
                    value={ password }
                    onChange={ handleInputChange }
                    >
                  </input>

                  <button type='submit' className='btn btn-primary'> Enviar </button>
              </form>

        </>
    )
}
