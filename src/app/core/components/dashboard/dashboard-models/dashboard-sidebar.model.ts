export class sideBar {
  public icon: string;
  public title: string;
  public description: string;
  public countIncludes: string;
  public route: string;

  constructor(icon: string, title: string, desc: string, count: string, route: string) {
    this.icon = icon;
    this.title = title;
    this.description = desc;
    this.countIncludes = count;
    this.route = route;
  }
}
