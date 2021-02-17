import list from '../components/data/list'


function Footer() {
  return(
    <div className="footer">
      {list.map((item,index) => {
        return <a key={index} style={{color:"grey", fontSize:"10px", paddingRight:"10px"}}>{item}</a>
      })}
    </div>
  )
}

export default Footer