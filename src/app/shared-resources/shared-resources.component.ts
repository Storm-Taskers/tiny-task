import { Component, OnInit, Input } from "@angular/core";
import { SharedResourceService } from "../services/shared-resources-service/shared-resources.service";
import { UserService } from "../services/user-service/user.service";
import { TeamService } from "../services/team-service/team.service";

import { Resource } from "./shared-resources";

@Component({
  selector: "shared-resources",
  templateUrl: "./shared-resources.component.html",
  styleUrls: ["./shared-resources.component.css"]
})
export class SharedResourceComponent implements OnInit {
  private value: any = "all";
  private teamId: number = this.teamService.currentTeam;
  public nameField: string;

  constructor(
    private sharedResourceService: SharedResourceService,
    private userService: UserService,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    this.sharedResourceService.getResources(this.teamId);
  }

  addNewResource(resource: string, resourceNote: string): void {
    let teamId: number = this.teamService.currentTeam;
    let userId: number = this.userService.userId;

    if (resource !== "" && typeof resource !== "undefined") {
      this.sharedResourceService.createResource(
        teamId,
        userId,
        resource,
        resourceNote
      );
      this.nameField = "";
    }
  }

  deleteResource(resourceId: number, resource: string): void {
    if (confirm(`Are you sure you want to delete "${resource}"?`)) {
      this.sharedResourceService.deleteResource(resourceId);
    }
  }

  editResource(
    resource: string,
    resourceNotes: string,
    resourceId: number
  ): void {
    this.sharedResourceService.editResource(
      resourceId,
      resource,
      resourceNotes
    );
  }

  handleError(): void {
    alert("50 Character Limit Exceeded");
  }
}
