// *** WARNING: this file was generated by pulumigen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as enums from "./types/enums";
import * as utilities from "./utilities";

/**
 * Deployment settings configure Pulumi Deployments for a stack.
 *
 * ### Import
 *
 * Deployment settings can be imported using the `id`, which for deployment settings is `{org}/{project}/{stack}` e.g.,
 *
 * ```sh
 *  $ pulumi import pulumiservice:index:DeploymentSettings my_settings my-org/my-project/my-stack
 * ```
 */
export class DeploymentSettings extends pulumi.CustomResource {
    /**
     * Get an existing DeploymentSettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): DeploymentSettings {
        return new DeploymentSettings(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pulumiservice:index:DeploymentSettings';

    /**
     * Returns true if the given object is an instance of DeploymentSettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeploymentSettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeploymentSettings.__pulumiType;
    }

    /**
     * Organization name.
     */
    public readonly organization!: pulumi.Output<string | undefined>;
    /**
     * Project name.
     */
    public readonly project!: pulumi.Output<string | undefined>;
    /**
     * Stack name.
     */
    public readonly stack!: pulumi.Output<string | undefined>;

    /**
     * Create a DeploymentSettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeploymentSettingsArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.sourceContext === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sourceContext'");
            }
            if ((!args || args.stack === undefined) && !opts.urn) {
                throw new Error("Missing required property 'stack'");
            }
            resourceInputs["executorContext"] = args ? args.executorContext : undefined;
            resourceInputs["github"] = args ? (args.github ? pulumi.output(args.github).apply(inputs.deploymentSettingsGithubArgsProvideDefaults) : undefined) : undefined;
            resourceInputs["operationContext"] = args ? args.operationContext : undefined;
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["sourceContext"] = args ? args.sourceContext : undefined;
            resourceInputs["stack"] = args ? args.stack : undefined;
        } else {
            resourceInputs["organization"] = undefined /*out*/;
            resourceInputs["project"] = undefined /*out*/;
            resourceInputs["stack"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DeploymentSettings.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a DeploymentSettings resource.
 */
export interface DeploymentSettingsArgs {
    /**
     * Settings related to the deployment executor.
     */
    executorContext?: pulumi.Input<inputs.DeploymentSettingsExecutorContextArgs>;
    /**
     * GitHub settings for the deployment.
     */
    github?: pulumi.Input<inputs.DeploymentSettingsGithubArgs>;
    /**
     * Settings related to the Pulumi operation environment during the deployment.
     */
    operationContext?: pulumi.Input<inputs.DeploymentSettingsOperationContextArgs>;
    /**
     * Organization name.
     */
    organization: pulumi.Input<string>;
    /**
     * Project name.
     */
    project: pulumi.Input<string>;
    /**
     * Settings related to the source of the deployment.
     */
    sourceContext: pulumi.Input<inputs.DeploymentSettingsSourceContextArgs>;
    /**
     * Stack name.
     */
    stack: pulumi.Input<string>;
}
