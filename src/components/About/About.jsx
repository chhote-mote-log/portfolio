const About = () => {
  const aboutStats = [
    {
      label: 'Projects done',
      number: 10,
    },
    {
      label: 'Years of experience',
      number: 1,
    },
  ];

  return (
    <section id="about" className="section z-100000">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Ayush Pandey, a software engineer and professional web developer passionate about crafting
            innovative, efficient, and user-friendly web solutions. With expertise in modern technologies, I focus on
            building seamless digital experiences that solve real-world problems. I thrive on creativity, problem-solving,
            and delivering impactful applications that make a difference.
          </p>
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutStats.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
            <img
              src="../../../public/images/logo.svg"
              alt="Ayush Pandey's Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
