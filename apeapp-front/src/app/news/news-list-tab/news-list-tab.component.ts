import { Component, OnInit } from '@angular/core';
import {NewsService} from '../services/news.service';
import {CommunicationModel} from '../model/CommunicationModel';
import {Observable} from 'rxjs';
import {map, shareReplay, tap} from 'rxjs/operators';

/**
 * This componant get select and display actuality by type
 */
@Component({
  selector: 'app-news-list-tab',
  templateUrl: './news-list-tab.component.html',
  styleUrls: ['./news-list-tab.component.css']
})
export class NewsListTabComponent implements OnInit {

  public title = 'actualite';

  public imgpath = 'assets/img/title/' + this.title + '.png';

  public news: any;
  public errorMessage: any;

  allComs: CommunicationModel[];

  allComs$: Observable<CommunicationModel[]>;
  manifComs$: Observable<CommunicationModel[]>;
  actuComs$: Observable<CommunicationModel[]>;
  infoComs$: Observable<CommunicationModel[]>;

  imageToShow: any;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNewsCommunicationsForSite()
      .subscribe(data => {
          this.news = data;
        }
        , err => {
          this.errorMessage = err.error.message;
        });

    const communications$ = this.newsService.getNewsCommunicationsForSite();

    const allCommunications$ = communications$.pipe(
      tap(() => console.log('const allCommunications$')),
      map(res => Object.values(res)),
      shareReplay()
    );

    /**
     * Provide all Communications
     */
    this.allComs$ = allCommunications$
      .pipe(
        map(comms => comms)
      );

    /**
     * Provide list of manif Communications
     */
    this.manifComs$ = allCommunications$
      .pipe(
        map(comms => comms.filter(comm => comm.typeCom === 'MANIFESTATION'))
      );

    /**
     * Provide list of actu Communications
     */
    this.actuComs$ = allCommunications$
      .pipe(
        map(comms => comms.filter(comm => comm.typeCom === 'ACTUALITE'))
      );

    /**
     * Provide list of info Communications
     */
    this.infoComs$ = allCommunications$
      .pipe(
        map(comms => comms.filter(comm => comm.typeCom === 'INFORMATION'))
      );
  }

  /*
  TODO maye unusable
   */
  private createImageFromBlob(image: Blob) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  /*
  TODO maye unusable
 */
  public getImageFromService(titleImage: string) {
    // this.isImageLoading = true;
    this.newsService.getImageFile(titleImage).subscribe(data => {
      this.createImageFromBlob(data);
      // this.isImageLoading = false;
    }, error => {
      // this.isImageLoading = false;
      console.log(error);
    });
  }
}
