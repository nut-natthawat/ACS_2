import './App.css'
import ironman from '/im.jpg'

function Ironman() {

  const listofironman = [
    {id:1, ironman},
    {id:2, ironman},
    {id:3, ironman},
  ]

     return (
    <div>
      {listofironman.map((item) => (
        <img key={item.id} src={item.ironman} className='ironman'/>
      ))}
    </div>
  )
}

function Box(){
  const box1 = [
    {id:1,title: "What's a Statue", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque?"},
    {id:2,title: "How to display?", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque?"},
    {id:3,title: "Meet collectors", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque?"},
    {id:4,title: "Start your journey", detail: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, neque?"},
  ]

  return(
    <>
      <div className='box-container'>
        {box1.map((box1) => (
          <div key={box1.id} className='box'>
            <img className = 'icon' src="data:image/svg+xml;base64,PHN2ZyBpZD0iQ2FwYV8xIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PHBhdGggZD0ibTQwNiAzNjFjOC4yODQgMCAxNS02LjcxNiAxNS0xNSAwLTU4LjQ0OS00Ny4xMDMtMTA2LTEwNS0xMDZoLTE1di0xNS4wNThjMTQuOTU2LTExLjI1NiAyNS41OTMtMjcuOTU3IDI4LjkwNy00Ny4xNDEgMTguMDI5LTUuODcxIDMxLjA5My0yMi44MzkgMzEuMDkzLTQyLjgwMXYtMzBjMC01Ny44OTctNDcuMTAzLTEwNS0xMDUtMTA1cy0xMDUgNDcuMTAzLTEwNSAxMDV2MzBjMCAxOS45NjIgMTMuMDY0IDM2LjkzIDMxLjA5MyA0Mi44MDEgMy4zMTQgMTkuMTg1IDEzLjk1MiAzNS44ODUgMjguOTA3IDQ3LjE0MXYxNS4wNThoLTE1Yy01Ny44OTcgMC0xMDUgNDcuNTUxLTEwNSAxMDYgMCA4LjI4NCA2LjcxNiAxNSAxNSAxNSAzNi4yODkgMCA2Ni42MzQgMjYuMjUzIDczLjUyNiA2MWgtNDMuNTI2Yy04LjI4NCAwLTE1IDYuNzE2LTE1IDE1djYwYzAgOC4yODQgNi43MTYgMTUgMTUgMTVoMjQwYzguMjg0IDAgMTUtNi43MTYgMTUtMTV2LTYwYzAtOC4yODQtNi43MTYtMTUtMTUtMTVoLTQzLjUyNmM2Ljg5Mi0zNC43NDcgMzcuMjM3LTYxIDczLjUyNi02MXptLTE1MC0zMzFjMzYuOTg4IDAgNjcuNzg3IDI2LjkyMSA3My44ODQgNjIuMTk0LS41My0uMTcyLTEuMDYyLS4zMzgtMS42MDEtLjQ5MS0yLjY2Ny02LjIwNS03LjIwNC0xMS41MzUtMTMuMTktMTUuMjM2LTkuOTYyLTYuMTU1LTIyLjE2LTYuNzA0LTMyLjYzNC0xLjQ2OC0xOS42MjYgOS44MTMtNDEuNTk5IDE1LTYzLjU0MSAxNWgtMjIuOTE4Yy00Ljg0NSAwLTkuNTA5Ljc3OS0xMy44ODUgMi4yMDIgNi4wOTMtMzUuMjc1IDM2Ljg5NC02Mi4yMDEgNzMuODg1LTYyLjIwMXptLTYwIDEyMGMtOC4yNzEgMC0xNS02LjcyOS0xNS0xNXM2LjcyOS0xNSAxNS0xNWgyMi45MThjMjYuNTc2IDAgNTMuMTg4LTYuMjgyIDc2Ljk1Ny0xOC4xNjcgMS4xMDQtLjU1MiAyLjM5NS0uNDk2IDMuNDQ1LjE1NCAxLjA1Mi42NSAxLjY4IDEuNzc2IDEuNjggMy4wMTMgMCA4LjI4NCA2LjcxNiAxNSAxNSAxNSA4LjI3MSAwIDE1IDYuNzI5IDE1IDE1cy02LjcyOSAxNS0xNSAxNWMtOC4yODQgMC0xNSA2LjcxNi0xNSAxNSAwIDI0LjgxMy0yMC4xODcgNDUtNDUgNDVzLTQ1LTIwLjE4Ny00NS00NWMwLTguMjg0LTYuNzE2LTE1LTE1LTE1em0xNjUgMzMyaC0yMTB2LTMwaDIxMHptLTE1MS4wNDgtNjBjLTYuNDgzLTQ2LjAxLTQyLjMzOC04Mi42LTg3LjcyNS04OS43MzYgNi4zOTgtMzUuMzczIDM3LjA0NC02Mi4yNjQgNzMuNzczLTYyLjI2NGgzMGM4LjI4NCAwIDE1LTYuNzE2IDE1LTE1di0xNi41MjZjNC44NS45ODkgOS44NjIgMS41MjYgMTUgMS41MjZzMTAuMTUtLjUzNyAxNS0xLjUyNnYxNi41MjZjMCA4LjI4NCA2LjcxNiAxNSAxNSAxNWgzMGMzNi43MjkgMCA2Ny4zNzUgMjYuODkxIDczLjc3MiA2Mi4yNjQtNDUuMzg2IDcuMTM2LTgxLjI0MSA0My43MjYtODcuNzI0IDg5LjczNnoiLz48L2c+PC9zdmc+" />
            <h1>{box1.title}</h1>
            <p>{box1.detail}</p>
          </div>
        ))}
      </div>
    </>
  )
}


function App() {

  return (
    <>
    
      <div className='container'>
        <div class='p1'>
            <h2>Happy collecting</h2>
            <h1><strong>TSC Channel</strong></h1>
            <h2>The source for your statue journey</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Natus, cupiditate iusto provident quos delectus voluptas. 
            Iure fugiat esse nam quod?</p>
        </div>
        <form>
            <input placeholder="E-mail address" />
            <button type="button">Join Us!</button>
        </form>
        <Ironman />
        <Box />
      </div>
      
      
    </>
  )
}

export default App
