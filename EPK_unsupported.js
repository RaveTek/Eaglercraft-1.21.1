class GuiPakErrorScreen extends GuiScreen {
    initGui() {
        this.buttonList.clear();
        this.buttonList.push(new GuiButton(0, this.width / 2 - 100, this.height / 6 + 168, I18n.format("Go back", [])));
    }

    actionPerformed(button) {
        if (button.id === 0) {
            this.mc.displayGuiScreen(new GuiWorldSelection(this));
        }
    }

    keyTyped(typedChar, keyCode) {
        // Intentionally left empty for now.
    }

    drawScreen(mouseX, mouseY, partialTicks) {
        this.drawDefaultBackground();
        this.drawCenteredString(this.fontRenderer, "EPK files not supported!", this.width / 2, this.height / 4 - 60 + 20, 0xFFFFFF);
        this.drawString(this.fontRenderer, "Eagler PAK files (.epk) are not yet supported in this version.", this.width / 2 - 140, this.height / 4 - 60 + 60, 0xA0A0A0);
        this.drawString(this.fontRenderer, "Convert them to regular zip files by importing them into", this.width / 2 - 140, this.height / 4 - 60 + 60 + 18, 0xA0A0A0);
        this.drawString(this.fontRenderer, "Lax1dude's EaglercraftX 1.8 client and then exporting", this.width / 2 - 140, this.height / 4 - 60 + 60 + 27, 0xA0A0A0);
        this.drawString(this.fontRenderer, "them as .zip files that can then be read by Eaglercraft 1.21.1.", this.width / 2 - 140, this.height / 4 - 60 + 60 + 36, 0xA0A0A0);
        this.drawString(this.fontRenderer, "After that you can import them as regular vanilla worlds.", this.width / 2 - 140, this.height / 4 - 60 + 60 + 54, 0xA0A0A0);
        this.drawString(this.fontRenderer, "EPK file support will be added in later updates of the", this.width / 2 - 140, this.height / 4 - 60 + 60 + 63, 0xA0A0A0);
        this.drawString(this.fontRenderer, "Eaglercraft 1.21.1.", this.width / 2 - 140, this.height / 4 - 60 + 60 + 72, 0xA0A0A0);
        super.drawScreen(mouseX, mouseY, partialTicks);
    }
}
