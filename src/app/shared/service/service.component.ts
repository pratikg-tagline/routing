import { Component, OnInit } from '@angular/core';

interface Users{
  img: string
      title: string
      description:
        string
      learnmore: string
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }
  users:Users[]= [
    {
      img: '../assets/../assets/images/web-design-icon.webp',
      title: 'Software Product Engineering',
      description:
        'We are dedicated to providing the best Software product engineering services for your business. Ourteam of developers provides the service of software product engineering and it includes designing,developing, testing, and deploying the software products',
      learnmore: 'Learn More ->',
    },
    {
      img: '../assets/../assets/images/web-design-icon.webp',
      title: 'Agile QA, Automation, and DevOps',
      description:
        'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA,Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QAensures the quality of the software',
      learnmore: 'Learn More ->',
    },
    {
      img: '../assets/../assets/images/uiux-design-icon.webp',
      title: 'Digital Strategy & Design',
      description:
        'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of theirbusinesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences',
      learnmore: 'Learn More ->',
    },
    {
      img: '../assets/../assets/images/software-development-1.png',
      title: 'Software outsourcing company',
      description:
        'Tagline Infotech is an experienced software outsourcing company that provides services for variousbusinesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
      learnmore: 'Learn More ->',
    },
    {
      img: '../assets/../assets/images/software-development-1.png',
      title: 'Software outsourcing company',
      description:
        'Tagline Infotech is an experienced software outsourcing company that provides services for variousbusinesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
      learnmore: 'Learn More ->',
    },
  ];
  ngOnInit(): void {
  }

}
