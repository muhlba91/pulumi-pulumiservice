// *** WARNING: this file was generated by pulumi-java-gen. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package com.pulumi.pulumiservice;

import com.pulumi.core.Output;
import com.pulumi.core.annotations.Export;
import com.pulumi.core.annotations.ResourceType;
import com.pulumi.core.internal.Codegen;
import com.pulumi.pulumiservice.OrgAccessTokenArgs;
import com.pulumi.pulumiservice.Utilities;
import java.lang.String;
import java.util.Optional;
import javax.annotation.Nullable;

/**
 * The Pulumi Service allows users to create access tokens scoped to orgs. Org access tokens is a resource to create them and assign them to an org
 * 
 */
@ResourceType(type="pulumiservice:index:OrgAccessToken")
public class OrgAccessToken extends com.pulumi.resources.CustomResource {
    /**
     * Optional. Description for the token.
     * 
     */
    @Export(name="description", type=String.class, parameters={})
    private Output</* @Nullable */ String> description;

    /**
     * @return Optional. Description for the token.
     * 
     */
    public Output<Optional<String>> description() {
        return Codegen.optional(this.description);
    }
    /**
     * The name for the token.
     * 
     */
    @Export(name="name", type=String.class, parameters={})
    private Output</* @Nullable */ String> name;

    /**
     * @return The name for the token.
     * 
     */
    public Output<Optional<String>> name() {
        return Codegen.optional(this.name);
    }
    /**
     * The organization&#39;s name.
     * 
     */
    @Export(name="organizationName", type=String.class, parameters={})
    private Output</* @Nullable */ String> organizationName;

    /**
     * @return The organization&#39;s name.
     * 
     */
    public Output<Optional<String>> organizationName() {
        return Codegen.optional(this.organizationName);
    }

    /**
     *
     * @param name The _unique_ name of the resulting resource.
     */
    public OrgAccessToken(String name) {
        this(name, OrgAccessTokenArgs.Empty);
    }
    /**
     *
     * @param name The _unique_ name of the resulting resource.
     * @param args The arguments to use to populate this resource's properties.
     */
    public OrgAccessToken(String name, OrgAccessTokenArgs args) {
        this(name, args, null);
    }
    /**
     *
     * @param name The _unique_ name of the resulting resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param options A bag of options that control this resource's behavior.
     */
    public OrgAccessToken(String name, OrgAccessTokenArgs args, @Nullable com.pulumi.resources.CustomResourceOptions options) {
        super("pulumiservice:index:OrgAccessToken", name, args == null ? OrgAccessTokenArgs.Empty : args, makeResourceOptions(options, Codegen.empty()));
    }

    private OrgAccessToken(String name, Output<String> id, @Nullable com.pulumi.resources.CustomResourceOptions options) {
        super("pulumiservice:index:OrgAccessToken", name, null, makeResourceOptions(options, id));
    }

    private static com.pulumi.resources.CustomResourceOptions makeResourceOptions(@Nullable com.pulumi.resources.CustomResourceOptions options, @Nullable Output<String> id) {
        var defaultOptions = com.pulumi.resources.CustomResourceOptions.builder()
            .version(Utilities.getVersion())
            .build();
        return com.pulumi.resources.CustomResourceOptions.merge(defaultOptions, options, id);
    }

    /**
     * Get an existing Host resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param options Optional settings to control the behavior of the CustomResource.
     */
    public static OrgAccessToken get(String name, Output<String> id, @Nullable com.pulumi.resources.CustomResourceOptions options) {
        return new OrgAccessToken(name, id, options);
    }
}
