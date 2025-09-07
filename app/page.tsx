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
    </section>
  )
}
