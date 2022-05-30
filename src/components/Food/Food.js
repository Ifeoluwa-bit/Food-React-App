import './Food.css'

export default function Food(props) {
  return (
    <div name='menu' style={{background: `url('${props.bgImg}') no-repeat center center/cover`}} className='food'>
      
        <div className="container">
            <div style={{background: `url('${props.bgImg1}') no-repeat center center/cover`}} className="left"></div>
            <div style={{background: `url('${props.bgImg2}') no-repeat center center/cover`}} className="right"></div>
        </div>
    </div>
  )
}
