import {
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import * as d3 from 'd3';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  entities = [];
  relationships = [];
  simulation: d3.Simulation<any, any> | undefined;
  @ViewChild('svgEle', { static: true }) svgElement:
    | ElementRef
    | undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    if (this.svgElement) {
      const domElement = this.svgElement.nativeElement;
      this.simulation = d3
        .forceSimulation<any, any>(this.entities)
        .force('charge', d3.forceManyBody().strength(-30))
        .force('center', d3.forceCenter(500 / 2, 500 / 2))
        .force('x', d3.forceX())
        .force('y', d3.forceY())
        .force(
          'center',
          d3.forceCenter(
            // parentNode needed for firefox
            (domElement.clientWidth ||
              domElement.parentNode.clientWidth) / 2,
            (domElement.clientHeight ||
              domElement.parentNode.clientHeight) / 2
          )
        )
        // really low alpha min and decay result in long running
        // force graph, good for ambient motion during presentation
        .alphaMin(0.0001)
        .alphaDecay(0.0005)
        .on('tick', () => {
          // This is where we would normally manipulate the DOM
          // and update node positions
        })
        .force(
          'link',
          d3
            .forceLink(this.relationships)
            // Associate links with nodes by way of display name
            .id((node: any) => node.displayName)
            .distance(0)
            .strength(0.5)
        );

      this.dataService
        .getEntitiesAndLinks()
        .subscribe((stuff: any) => {
          this.entities = stuff.entities;
          this.relationships = stuff.relationships;
          if (this.simulation) {
            this.simulation.nodes(this.entities);
            this.simulation.force(
              'link',
              d3
                .forceLink(this.relationships)
                .id((node: any) => node.displayName)
                .distance(0)
                .strength(0.5)
            );
          }
        });
    }
  }
}
