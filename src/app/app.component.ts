import { AfterViewInit,Component,Renderer2 , ElementRef, ViewChild } from '@angular/core';
import 'intersection-observer';
@Component({
  selector: 'app-root',
  templateUrl: './main-page/main-page.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent  implements AfterViewInit{
  @ViewChild('observedElement') observedElement!: ElementRef;
  title = 'intersec-offset-proj';





  images_uri_list = [

    'https://plus.unsplash.com/premium_photo-1676923902105-19d5c90d585c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1742943892620-b0fe2db78226?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1737712334383-debc45ffa906?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1741920852866-94d44a2d32bb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


  ]

  constructor (private renderer:Renderer2){}
  ngAfterViewInit():void{


 

        let  home_button = document.getElementsByClassName('home') [0] as HTMLElement
        let button_bottom_disk = document.getElementsByClassName('button-bottom-disk')[0] as HTMLElement
       
          this.play_disk_animation(home_button, button_bottom_disk);
          const options = {
            root: null,  // null means the viewport
            rootMargin: '0px',  // margin around the root
            threshold: 0.5  // percentage of the element visibility to trigger the callback
          };


          
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          image.src =entry.target.attributes[2].value
                    // Add custom logic, e.g., trigger animations or load content here
        } else {
          console.log('Element is out of view');
        }
      });
    }, options);

    const images = document.querySelectorAll('img');
    images.forEach(img => observer.observe(img));



      }

    play_disk_animation(home_button:HTMLElement,button_bottom_disk:HTMLElement){
     this.renderer.setStyle(button_bottom_disk, 'left', `${home_button.offsetLeft}px`);
     this.renderer.setStyle(button_bottom_disk, 'width', `${home_button.offsetWidth}px`);
  

    }

    move_disk =(data:MouseEvent)=>{
      const target  =  data.target as HTMLElement
      let button_bottom_disk = document.getElementsByClassName('button-bottom-disk')[0] as HTMLElement
     
      this.play_disk_animation(target,button_bottom_disk)
    }
}
