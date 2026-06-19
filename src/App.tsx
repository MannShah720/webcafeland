import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="relative flex flex-col min-h-screen w-full overflow-hidden bg-[#030014]">
      {/* Ambient Light Flares */}
      <div className="absolute top-0 w-full h-[800px] pointer-events-none z-0 overflow-hidden">
        {/* Left Light */}
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[50%] bg-indigo-600/20 blur-[120px] rounded-full" />
        {/* Right Light */}
        <div className="absolute top-[10%] right-[-10%] w-[40%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      {/* Background Grid Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-grid-pattern grid-mask" />

      {/* Navigation */}
      <Navbar />

      {/* Primary Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-10">
        <h1 className="text-3xl font-bold text-white">System Online.</h1>
        <p className="text-gray-400 mt-2">Ambient lighting calibrated.</p>
      </div>
    </main>
  );
};

export default App;