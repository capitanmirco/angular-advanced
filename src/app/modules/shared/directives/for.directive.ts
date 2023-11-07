import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFor]'
})
export class ForDirective<T> implements OnChanges {

  @Input() public appForOf: T[] | null = null;

  constructor(private _templateRef: TemplateRef<ForDirectiveContext<T>>, private _vcr: ViewContainerRef) { }

  public ngOnChanges(changes: SimpleChanges): void {
      this._vcr.clear();

      for (const elem of this.appForOf || []) {
        this._vcr.createEmbeddedView(
          this._templateRef,
          new ForDirectiveContext(elem)
        );
      }
  }
}

class ForDirectiveContext<T> {
  constructor(public $implicit: T) {}
}
