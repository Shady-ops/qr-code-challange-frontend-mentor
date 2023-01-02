import './App.css';

function App() {
  return (
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className='qrContainer'>
        <img src='image-qr-code.png' className='rounded'/>
        <h2 className="qrTitle text-center">Improve your front-end skills by building projects</h2>
        <p className='text-center align-items-center'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
