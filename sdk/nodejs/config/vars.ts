// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("pulumi-service");

export declare const accessToken: string | undefined;
Object.defineProperty(exports, "accessToken", {
    get() {
        return __config.get("accessToken");
    },
    enumerable: true,
});

