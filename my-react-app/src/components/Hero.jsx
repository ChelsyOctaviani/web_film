const Hero = () => {
    return (
        <div className="bg-slate-400 bg-center w-full overflow-hidden" style={{ height: '60vh' }}>
            <img
                src="/images/Hero.png"
                alt="Hero"
                className="w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
};

export default Hero;
