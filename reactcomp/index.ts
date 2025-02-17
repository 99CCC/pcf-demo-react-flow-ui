import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import { MainComp } from "./components/MainComp"; // Import Main Component

export class reactcomp implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private notifyOutputChanged: () => void;

    constructor() {
        // Empty
    }

    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary
    ): void {
        this.notifyOutputChanged = notifyOutputChanged;
    }

    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        //return React.createElement(MainComp, { name: "mmhmm" }); // Pass props if needed
        return React.createElement(MainComp);
    }

    public getOutputs(): IOutputs {
        return {};
    }

    public destroy(): void {
        // Cleanup if necessary
    }
}
