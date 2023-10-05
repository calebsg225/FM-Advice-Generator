import { useAdvice } from "../hooks/useAdvice"
import buttonSvg from "../assets/icon-dice.svg";

const AdviceTile = () => {
  const { adviceData, isLoading, fetchNewAdvice } = useAdvice();
  return (
    <section className='advice-container'>
      {isLoading
      ? 
      <h2>Loading...</h2>
      :
      <>
        <p>ADVICE #{adviceData.slip.id}</p>
        <h2>"{adviceData.slip.advice}"</h2>
        <div></div>
        <button onClick={fetchNewAdvice}>
          <img src={buttonSvg} alt="dice" />
        </button>
      </>
      }
    </section>
  )
}

export default AdviceTile
