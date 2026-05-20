import { Link } from "react-router-dom";

export const AboutUs = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Epilogue:wght@300;400;500;600&display=swap');
      
      @keyframes au-spin { to { transform: rotate(360deg); } }
      @keyframes au-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      @keyframes au-shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
      @keyframes au-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
    `}</style>

    <section className="w-full bg-[#f4f1ec] py-[100px] px-6 relative overflow-hidden font-[Epilogue]" style={{
      background: `
        linear-gradient(135deg, transparent 0%, transparent 100%),
        radial-gradient(ellipse 55% 55% at 0% 50%, rgba(99,102,241,0.07) 0%, transparent 65%),
        radial-gradient(ellipse 45% 50% at 100% 40%, rgba(14,165,233,0.05) 0%, transparent 60%)
      `
    }}>
      <div className="absolute pointer-events-none z-0 w-[380px] h-[380px] rounded-full border border-[rgba(99,102,241,0.07)] top-[-120px] right-[-80px]" style={{ animation: 'au-spin 55s linear infinite' }} />
      <div className="absolute pointer-events-none z-0 w-[220px] h-[220px] rounded-full border border-[rgba(14,165,233,0.08)] bottom-[-60px] left-[-50px]" style={{ animation: 'au-spin 40s linear infinite reverse' }} />
      <div className="absolute pointer-events-none z-0 w-[160px] h-[160px] bottom-[60px] right-[60px] opacity-[0.55]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(99,102,241,0.12) 1.5px, transparent 1.5px)',
        backgroundSize: '18px 18px'
      }} />

      <div className="relative z-10 max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
        <div>
          <div className="inline-flex items-center gap-[7px] px-[14px] py-[5px] rounded-full border border-[rgba(99,102,241,0.2)] bg-[rgba(99,102,241,0.06)] text-[11px] font-semibold text-[#6366f1] uppercase tracking-[0.08em] mb-5">
            <span className="w-[5px] h-[5px] rounded-full bg-[#6366f1]" style={{ animation: 'au-pulse 2s ease-in-out infinite' }} />
            Who We Are
          </div>
          <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] font-black text-[#111827] leading-[1.12] mb-5">
            Built for Modern<br />
            <span style={{
              background: 'linear-gradient(135deg, #6366f1, #0ea5e9)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Logistics Companies</span>
          </h2>
          <p className="text-[15px] text-[#6b7280] leading-[1.8] font-normal max-w-[460px] mb-8">
            Truck Dispatcher is built for modern logistics companies to streamline
            operations, improve communication, and deliver results — every time.
          </p>
          <ul className="flex flex-col gap-[14px] list-none p-0 mb-9">
            {[
              "All-in-one logistics solution",
              "Real-time visibility and tracking",
              "Trusted by logistics professionals",
              "Easy to use and powerfully capable",
            ].map((item) => (
              <li key={item} className="flex items-center gap-[14px] text-[14px] text-[#374151]">
                <span className="w-[26px] h-[26px] rounded-[8px] bg-gradient-to-br from-[#6366f1] to-[#0ea5e9] flex items-center justify-center text-[12px] text-white font-bold flex-shrink-0" style={{ boxShadow: '0 4px 10px rgba(99,102,241,0.3)' }}>
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link 
            to="/register" 
            className="inline-flex items-center gap-2 px-7 h-[50px] rounded-[14px] text-white font-semibold text-[14px] relative overflow-hidden no-underline transition-all duration-150"
            style={{
              background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 45%, #0ea5e9 100%)',
              boxShadow: '0 6px 20px rgba(99,102,241,0.35)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(99,102,241,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(99,102,241,0.35)';
            }}
          >
            Get Started →
          </Link>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative rounded-[28px] overflow-hidden aspect-[4/3]" style={{
            boxShadow: '0 4px 8px rgba(0,0,0,0.06), 0 20px 60px rgba(99,102,241,0.1), 0 60px 100px rgba(0,0,0,0.08)'
          }}>
            <div 
              className="absolute top-0 left-0 right-0 h-1 rounded-t-[28px]"
              style={{
                background: 'linear-gradient(90deg, #6366f1, #0ea5e9, #6366f1)',
                backgroundSize: '200% 100%',
                animation: 'au-shimmer 3s ease infinite'
              }}
            />
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&auto=format&fit=crop"
              alt="Truck on mountain road"
              className="w-full h-full object-cover block transition-transform duration-600"
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
            />
            <div className="absolute inset-0 pointer-events-none" style={{
              background: 'linear-gradient(160deg, transparent 45%, rgba(99,102,241,0.12) 100%)'
            }} />
          </div>
          <div 
            className="absolute bottom-[-20px] left-[-24px] bg-white rounded-[18px] py-[14px] px-5 flex items-center gap-3 min-w-[170px]"
            style={{
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              animation: 'au-float 4s ease-in-out infinite'
            }}
          >
            <div className="w-[40px] h-[40px] rounded-[12px] text-[18px] flex items-center justify-center flex-shrink-0 border border-[rgba(99,102,241,0.1)]" style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(14,165,233,0.08))'
            }}>
              🌍
            </div>
            <div>
              <div className="font-display text-[18px] font-black text-[#111827] leading-[1]">
                Kenya #1
              </div>
              <div className="text-[11px] text-[#9ca3af] font-medium mt-[3px]">
                Dispatch Platform
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);