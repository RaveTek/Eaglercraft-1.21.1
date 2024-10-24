class GuiScreenAuth {
    constructor() {
        this.Username = new GuiTextField();
        this.whichDefaultSkin = 0;
        this.newSkinWaitSteveOrAlex = false;
        this.oldMouseX = 0;
        this.oldMouseY = 0;
        this.TEXTURE_STEVE = "textures/entity/steve.png";
        this.TEXTURE_ALEX = "textures/entity/alex.png";
        this.dropDownOpen = false;
        this.dropDownOptions = [];
        this.slotsVisible = 0;
        this.selectedSlot = 0;
        this.scrollPos = -1;
        this.skinsHeight = 0;
        this.dragging = false;
        this.mousex = 0;
        this.mousey = 0;
        this.eaglerGui = "textures/gui/eagler_gui.png";

        this.updateOptions();
    }

    updateOptions() {
        this.dropDownOptions = DefaultSkins.defaultSkinsMap.map(skin => skin.name);
    }

    initGui() {
        Keyboard.enableRepeatEvents(true);
        this.buttonList = [];
        this.buttonList.push(new GuiButton(0, width / 2 - 100, height / 6 + 168, "Done"));
        this.Username.setFocused(true);
        this.Username.setText(mc.getSession().getUsername());
        this.whichDefaultSkin = DefaultPlayerSkin.getSkin();
        this.selectedSlot = this.whichDefaultSkin;

        this.buttonList.push(new GuiButton(1, width / 2 - 21, height / 6 + 110, "Add Skin"));
        this.buttonList.push(new GuiButton(2, width / 2 - 21 + 71, height / 6 + 110, "Clear List"));
    }

    actionPerformed(button) {
        if (button.id === 0) {
            mc.getSession().overrideUsername(this.Username.getText());
            mc.displayGuiScreen(new GuiMainMenu());
        }
    }

    keyTyped(typedChar, keyCode) {
        this.Username.textboxKeyTyped(typedChar, keyCode);
        if (keyCode === 15) {
            this.Username.setFocused(!this.Username.isFocused());
        }

        if (keyCode === 28 || keyCode === 156) {
            this.actionPerformed(this.buttonList[0]);
        }

        this.buttonList[0].enabled = this.Username.getText().length > 0;
    }

    handleMouseInput() {
        if (this.dropDownOpen) {
            const wheelDelta = Mouse.getEventDWheel();
            if (wheelDelta < 0) {
                this.scrollPos += 3;
            }
            if (wheelDelta > 0) {
                this.scrollPos -= 3;
                if (this.scrollPos < 0) {
                    this.scrollPos = 0;
                }
            }
        }
    }

    drawScreen(mouseX, mouseY, partialTicks) {
        this.drawDefaultBackground();
        this.drawCenteredString("Edit Profile", width / 2, 17, 16777215);
        this.drawString("Username", width / 2 - 20, height / 6 + 8, 10526880);
        this.drawString("Player Skin", width / 2 - 20, height / 6 + 66, 10526880);
        this.Username.drawTextBox();

        this.whichDefaultSkin = this.selectedSlot;
        DefaultPlayerSkin.setDefaultSkin(this.whichDefaultSkin);
        const skinX = width / 2 - 120;
        const skinY = height / 6 + 8;
        const skinWidth = 80;
        const skinHeight = 130;

        drawRect(skinX, skinY, skinX + skinWidth, skinY + skinHeight, -6250336);
        drawRect(skinX + 1, skinY + 1, skinX + skinWidth - 1, skinY + skinHeight - 1, -16777195);

        this.oldMouseX = mouseX;
        this.oldMouseY = mouseY;

        if (!this.dropDownOpen && !this.newSkinWaitSteveOrAlex) {
            super.drawScreen(mouseX, mouseY, partialTicks);
        } else {
            super.drawScreen(0, 0, partialTicks);
        }

        this.drawDropDown(skinX, skinY, skinWidth, skinHeight);
        this.drawSkinPreview(skinX, skinY);
    }

    drawDropDown(skinX, skinY, skinWidth, skinHeight) {
        skinY += 21; // Adjust for dropdown position
        if (this.dropDownOpen) {
            drawRect(skinX, skinY, skinX + skinWidth, skinY + this.skinsHeight, -6250336);
            drawRect(skinX + 1, skinY + 1, skinX + skinWidth - 1, skinY + this.skinsHeight - 1, -16777216);

            for (let i = 0; i < this.slotsVisible; i++) {
                if (i + this.scrollPos < this.dropDownOptions.length) {
                    if (this.selectedSlot === i + this.scrollPos) {
                        drawRect(skinX + 1, skinY + i * 10 + 4, skinX + skinWidth - 1, skinY + i * 10 + 14, 2013265919);
                    } else if (mouseX >= skinX && mouseX < skinX + skinWidth - 10 && mouseY >= skinY + i * 10 + 5 && mouseY < skinY + i * 10 + 15) {
                        drawRect(skinX + 1, skinY + i * 10 + 4, skinX + skinWidth - 1, skinY + i * 10 + 14, 1442840575);
                    }
                    this.drawString(this.dropDownOptions[i + this.scrollPos], skinX + 5, skinY + 5 + i * 10, 14737632);
                }
            }
        }
    }

    drawSkinPreview(skinX, skinY) {
        if (this.whichDefaultSkin === 0) {
            this.mc.getTextureManager().bindTexture(this.TEXTURE_STEVE);
            SkinPreviewRenderer.renderBiped(xx, yy, this.oldMouseX, this.oldMouseY, SkinModel.STEVE);
        } else {
            this.mc.getTextureManager().bindTexture(this.TEXTURE_ALEX);
            SkinPreviewRenderer.renderBiped(xx, yy, this.oldMouseX, this.oldMouseY, SkinModel.ALEX);
        }
    }

    updateScreen() {
        this.Username.updateCursorCounter();
        if (this.dropDownOpen) {
            if (Mouse.isButtonDown(0)) {
                const skinX = width / 2 - 20;
                const skinY = height / 6 + 103;
                const skinWidth = 140;
                if (this.mousex >= skinX + skinWidth - 10 && this.mousex < skinX + skinWidth) {
                    this.dragging = true;
                }
                if (this.dragging) {
                    const scrollerSize = this.skinsHeight * this.slotsVisible / this.dropDownOptions.length;
                    this.scrollPos = (this.mousey - skinY - scrollerSize / 2) * this.dropDownOptions.length / this.skinsHeight;
                }
            } else {
                this.dragging = false;
            }
        } else {
            this.dragging = false;
        }
    }

    mouseClicked(mx, my, button) {
        this.Username.mouseClicked(mx, my, button);
        if (button === 0) {
            const skinX = width / 2 + 140 - 40;
            const skinY = height / 6 + 82;
            if (mx >= skinX && mx < skinX + 20 && my >= skinY && my < skinY + 22) {
                this.dropDownOpen = !this.dropDownOpen;
                return;
            }
            const dropdownX = width / 2 - 20;
            const dropdownY = height / 6 + 82;
            const dropdownWidth = 140;
            const dropdownHeight = this.skinsHeight;

            if (mx < dropdownX || mx >= dropdownX + dropdownWidth || my < dropdownY || my >= dropdownY + dropdownHeight + 22) {
                this.dropDownOpen = false;
                this.dragging = false;
                return;
            }

            dropdownY += 21;
            if (this.dropDownOpen && !this.dragging) {
                for (let i = 0; i < this.slotsVisible; i++) {
                    if (i + this.scrollPos < this.dropDownOptions.length && this.selectedSlot !== i + this.scrollPos && mx >= dropdownX && mx < dropdownX + dropdownWidth - 10 && my >= dropdownY + i * 10 + 5 && my < dropdownY + i * 10 + 15) {
                        this.selectedSlot = i + this.scrollPos;
                        this.dropDownOpen = false;
                        this.dragging = false;
                    }
                }
            }
        }
    }
}
