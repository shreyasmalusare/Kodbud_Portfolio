import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  portfolioProjects = [
    {
      title: 'CloudBox',
      role: 'Full Stack Developer',
      company: 'SmartX Technologies',
      description: 'Developed backend APIs and resolved frontend architecture issues for a seamless cloud storage experience.',
      techStack: ['Angular', 'Node.js', 'APIs']
    },
    {
      title: 'Real-time Async Service',
      role: 'Backend Developer',
      company: 'SmartX Technologies',
      description: 'Architected a real-time asynchronous service backend, including comprehensive PRISM documentation.',
      techStack: ['Python', 'AsyncIO', 'WebSockets']
    },
    {
      title: 'Pro UI Portfolio',
      role: 'Frontend Developer',
      company: 'KODBUD Solutions',
      description: 'Engineered a premium, highly responsive portfolio utilizing Angular 16, SCSS, and Glassmorphism design principles.',
      techStack: ['Angular 16', 'SCSS', 'UI/UX']
    }
  ];

}
