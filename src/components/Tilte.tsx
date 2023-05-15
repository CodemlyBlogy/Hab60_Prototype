
type HeadingTitle = {
  title : string

}

const Title = ({ title } : HeadingTitle) => {
  return  <section>
  <h2 className="m-2" >{title}</h2>
  </section>
}
export default Title