import NavBar from '../components/NavBar'

export default function Home (props) {
  console.log(props)

  const test = async () => {
    // update email, name, other informations PUT,POST
    const data = await fetch('http://localhost:3000/api/users').then(res =>
      res.json()
    )

    console.log(data)
  }

  return (
    <div>
      <NavBar />
      <div onClick={test}>Try me</div>
    </div>
  )
}

export async function getStaticProps () {
  // before rendering user page GET
  // get email, name, surname and other informations
  const data = await fetch('http://localhost:3000/api/users').then(res =>
    res.json()
  )

  return {
    props: {
      data
    }
  }
}
