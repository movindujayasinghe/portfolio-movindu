import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
 <!-- Navigation Dots -->
    <nav class="nav" aria-label="Section navigation">
        <div class="nav-dot active" data-section="hero" title="Home"></div>
        <div class="nav-dot" data-section="about" title="About"></div>
        <div class="nav-dot" data-section="services" title="Services"></div>
        <div class="nav-dot" data-section="projects" title="Projects"></div>
        <div class="nav-dot" data-section="contact" title="Contact"></div>
    </nav>

    <!-- Theme Toggle -->
    <button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode">
        <i data-lucide="sun" class="theme-icon-light"></i>
        <i data-lucide="moon" class="theme-icon-dark" style="display: none;"></i>
    </button>

    <!-- Hero Section -->
    <section class="section hero" id="hero">
        <div class="container">
            <div class="hero-content">
                <h1 class="hero-title fade-in">Alex Chen</h1>
                <p class="hero-subtitle fade-in">Full Stack Developer & UI/UX Designer</p>
                <p class="hero-description fade-in">
                    Passionate about creating exceptional digital experiences through clean code, 
                    innovative design, and cutting-edge technology. Let's build something amazing together.
                </p>
                <div class="hero-buttons fade-in">
                    <a href="#contact" class="btn btn-ghost">
                        <i data-lucide="mail"></i>
                        Get In Touch
                    </a>
                    <a href="#projects" class="btn btn-ghost">
                        <i data-lucide="eye"></i>
                        View My Work
                    </a>
                </div>
            </div>
            <div class="scroll-indicator">
                <i data-lucide="chevron-down"></i>
            </div>
        </div>
      
      <div class="container">
            <div class="about-content">
                <div class="about-text slide-in-left">
                    <h2>About Me</h2>
                    <p>
                        With 5+ years of experience in web development, I specialize in creating 
                        scalable applications using modern technologies. My passion lies in 
                        transforming complex problems into elegant, user-friendly solutions.
                    </p>
                    <p>
                        I believe in continuous learning and staying up-to-date with the latest 
                        industry trends. When I'm not coding, you'll find me exploring new 
                        design patterns, contributing to open source, or mentoring aspiring developers.
                    </p>
                    <div class="skills">
                        <div class="skill-card fade-in">
                            <div class="skill-icon">⚛️</div>
                            <h4>React</h4>
                        </div>
                        <div class="skill-card fade-in">
                            <div class="skill-icon">📱</div>
                            <h4>React Native</h4>
                        </div>
                        <div class="skill-card fade-in">
                            <div class="skill-icon">🟢</div>
                            <h4>Node.js</h4>
                        </div>
                        <div class="skill-card fade-in">
                            <div class="skill-icon">🎨</div>
                            <h4>UI/UX</h4>
                        </div>
                        <div class="skill-card fade-in">
                            <div class="skill-icon">☁️</div>
                            <h4>AWS</h4>
                        </div>
                        <div class="skill-card fade-in">
                            <div class="skill-icon">🐳</div>
                            <h4>Docker</h4>
                        </div>
                    </div>
                </div>
                <div class="profile-image slide-in-right">
                    <i data-lucide="user"></i>
                </div>
            </div>
        </div>
    </section>
  )
}
