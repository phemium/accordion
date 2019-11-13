import { Component, h, Prop, Listen } from "@stencil/core";

@Component({
  tag: "edmbn-accordion",
  styleUrl: "accordion.css",
  shadow: true
})
export class Accordion {
  main: HTMLElement;
  header: HTMLElement;
  content: HTMLElement;
  headerHeight: number;
  contentHeight: number;

  @Listen("click", { target: "document" })
  onclick(event) {
    if (this.lostFocusClose) {
      if (
        !event.composedPath().find(node => node.nodeName === "EDMBN-ACCORDION")
      ) {
        this.expanded ? this.expandContent() : null;
      }
    }
  }

  @Prop({ reflectToAttr: true }) expanded = false;
  @Prop({ reflectToAttr: true }) bordered = false;
  @Prop() headerTitle: string;
  @Prop() lostFocusClose = false;

  componentDidLoad() {
    this.expanded = !this.expanded;
    this.expandContent();
  }

  expandContent() {
    const headerHeight = this.header.offsetHeight;
    if (this.expanded) {
      this.main.style.height = `${headerHeight}px`;
      this.expanded = false;
    } else {
      const contentHeight = this.content.offsetHeight;
      this.main.style.height = `${headerHeight + contentHeight}px`;
      this.expanded = true;
    }
  }
  render() {
    return (
      <div
        id="main"
        ref={el => (this.main = el as HTMLElement)}
        class="block overflow-hidden"
      >
        <div
          ref={el => (this.header = el as HTMLElement)}
          class="header flex items-center justify-between cursor-pointer"
          onClick={() => {
            this.expandContent();
          }}
        >
          <span class="p-4 max-w-75 truncate">{this.headerTitle}</span>
          <svg
            id="headerButton"
            class="header-button mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
          </svg>
        </div>
        <div
          id="content"
          ref={el => (this.content = el as HTMLElement)}
          class="flex flex-col h-auto py-2"
        >
          <slot name="content" />
        </div>
      </div>
    );
  }
}
