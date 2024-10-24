class ModelPlayer extends ModelBiped {
    constructor(parFloat1, parFlag) {
        super(parFloat1, 0.0, 64, 64);
        this.smallArms = parFlag;
        this.bipedDeadmau5Head = new ModelRenderer(this, 24, 0);
        this.bipedDeadmau5Head.addBox(-3.0, -6.0, -1.0, 6, 6, 1, parFloat1);
        this.bipedCape = new ModelRenderer(this, 0, 0);
        this.bipedCape.setTextureSize(64, 32);
        this.bipedCape.addBox(-5.0, 0.0, -1.0, 10, 16, 1, parFloat1);

        if (parFlag) {
            this.bipedLeftArm = new ModelRenderer(this, 32, 48);
            this.bipedLeftArm.addBox(-1.0, -2.0, -2.0, 3, 12, 4, parFloat1);
            this.bipedLeftArm.setRotationPoint(5.0, 2.5, 0.0);
            this.bipedRightArm = new ModelRenderer(this, 40, 16);
            this.bipedRightArm.addBox(-2.0, -2.0, -2.0, 3, 12, 4, parFloat1);
            this.bipedRightArm.setRotationPoint(-5.0, 2.5, 0.0);
            this.bipedLeftArmwear = new ModelRenderer(this, 48, 48);
            this.bipedLeftArmwear.addBox(-1.0, -2.0, -2.0, 3, 12, 4, parFloat1 + 0.25);
            this.bipedLeftArmwear.setRotationPoint(5.0, 2.5, 0.0);
            this.bipedRightArmwear = new ModelRenderer(this, 40, 32);
            this.bipedRightArmwear.addBox(-2.0, -2.0, -2.0, 3, 12, 4, parFloat1 + 0.25);
            this.bipedRightArmwear.setRotationPoint(-5.0, 2.5, 10.0);
        } else {
            this.bipedLeftArm = new ModelRenderer(this, 32, 48);
            this.bipedLeftArm.addBox(-1.0, -2.0, -2.0, 4, 12, 4, parFloat1);
            this.bipedLeftArm.setRotationPoint(5.0, 2.0, 0.0);
            this.bipedLeftArmwear = new ModelRenderer(this, 48, 48);
            this.bipedLeftArmwear.addBox(-1.0, -2.0, -2.0, 4, 12, 4, parFloat1 + 0.25);
            this.bipedLeftArmwear.setRotationPoint(5.0, 2.0, 0.0);
            this.bipedRightArmwear = new ModelRenderer(this, 40, 32);
            this.bipedRightArmwear.addBox(-3.0, -2.0, -2.0, 4, 12, 4, parFloat1 + 0.25);
            this.bipedRightArmwear.setRotationPoint(-5.0, 2.0, 10.0);
        }

        this.bipedLeftLeg = new ModelRenderer(this, 16, 48);
        this.bipedLeftLeg.addBox(-2.0, 0.0, -2.0, 4, 12, 4, parFloat1);
        this.bipedLeftLeg.setRotationPoint(1.9, 12.0, 0.0);
        this.bipedLeftLegwear = new ModelRenderer(this, 0, 48);
        this.bipedLeftLegwear.addBox(-2.0, 0.0, -2.0, 4, 12, 4, parFloat1 + 0.25);
        this.bipedLeftLegwear.setRotationPoint(1.9, 12.0, 0.0);
        this.bipedRightLegwear = new ModelRenderer(this, 0, 32);
        this.bipedRightLegwear.addBox(-2.0, 0.0, -2.0, 4, 12, 4, parFloat1 + 0.25);
        this.bipedRightLegwear.setRotationPoint(-1.9, 12.0, 0.0);
        this.bipedBodyWear = new ModelRenderer(this, 16, 32);
        this.bipedBodyWear.addBox(-4.0, 0.0, -2.0, 8, 12, 4, parFloat1 + 0.25);
        this.bipedBodyWear.setRotationPoint(0.0, 0.0, 0.0);
    }

    render(entity, f, f1, f2, f3, f4, f5) {
        super.render(entity, f, f1, f2, f3, f4, f5);
        GlStateManager.pushMatrix();

        if (this.isChild) {
            const f6 = 2.0;
            GlStateManager.scale(1.0 / f6, 1.0 / f6, 1.0 / f6);
            GlStateManager.translate(0.0, 24.0 * f5, 0.0);
            this.bipedLeftLegwear.render(f5);
            this.bipedRightLegwear.render(f5);
            this.bipedLeftArmwear.render(f5);
            this.bipedRightArmwear.render(f5);
            this.bipedBodyWear.render(f5);
        } else {
            if (entity && entity.isSneaking()) {
                GlStateManager.translate(0.0, 0.2, 0.0);
            }

            this.bipedLeftLegwear.render(f5);
            this.bipedRightLegwear.render(f5);
            this.bipedLeftArmwear.render(f5);
            this.bipedRightArmwear.render(f5);
            this.bipedBodyWear.render(f5);
        }

        GlStateManager.popMatrix();
    }

    renderDeadmau5Head(parFloat1) {
        this.copyModelAngles(this.bipedHead, this.bipedDeadmau5Head);
        this.bipedDeadmau5Head.rotationPointX = 0.0;
        this.bipedDeadmau5Head.rotationPointY = 0.0;
        this.bipedDeadmau5Head.render(parFloat1);
    }

    renderCape(parFloat1) {
        this.bipedCape.render(parFloat1);
    }

    setRotationAngles(f, f1, f2, f3, f4, f5, entity) {
        super.setRotationAngles(f, f1, f2, f3, f4, f5, entity);
        this.copyModelAngles(this.bipedLeftLeg, this.bipedLeftLegwear);
        this.copyModelAngles(this.bipedRightLeg, this.bipedRightLegwear);
        this.copyModelAngles(this.bipedLeftArm, this.bipedLeftArmwear);
        this.copyModelAngles(this.bipedRightArm, this.bipedRightArmwear);
        this.copyModelAngles(this.bipedBody, this.bipedBodyWear);
        
        if (entity && entity.isSneaking()) {
            this.bipedCape.rotationPointY = 2.0;
        } else {
            this.bipedCape.rotationPointY = 0.0;
        }
    }

    renderRightArm() {
        this.bipedRightArm.render(0.0625);
        this.bipedRightArmwear.render(0.0625);
    }

    renderLeftArm() {
        this.bipedLeftArm.render(0.0625);
        this.bipedLeftArmwear.render(0.0625);
    }

    setInvisible(flag) {
        super.setInvisible(flag);
        this.bipedLeftArmwear.showModel = flag;
        this.bipedRightArmwear.showModel = flag;
        this.bipedLeftLegwear.showModel = flag;
        this.bipedRightLegwear.showModel = flag;
        this.bipedBodyWear.showModel = flag;
        this.bipedCape.showModel = flag;
        this.bipedDeadmau5Head.showModel = flag;
    }

    postRenderArm(f) {
        if (this.smallArms) {
            this.bipedRightArm.rotationPointX += 1;
            this.bipedRightArm.postRender(f);
            this.bipedRightArm.rotationPointX -= 1;
        } else {
            this.bipedRightArm.postRender(f);
        }
    }
}
