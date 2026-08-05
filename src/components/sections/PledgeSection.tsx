export default function PledgeSection() {
  return (
    <section 
      id="chapter-2"
      data-chapter="2" 
      className="h-screen w-full flex items-center justify-center bg-black text-white relative"
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center border border-white/20 bg-black md:p-8">
        <img 
          src="/pledge.png?v=2" 
          alt="My Commitment To A Sustainable Future" 
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
