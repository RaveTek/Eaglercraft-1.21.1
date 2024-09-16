const { Maps } = require('com.google.common.collect');
const { LogUtils } = require('com.mojang.logging');
const { Files, InvalidPathException, Path } = require('java.nio.file');
const { SystemInfo, hardware } = require('oshi');
const { Logger } = require('org.slf4j');

const a = 1048576;
const c = LogUtils.getLogger();
let d, e, f;

class ac {
  constructor() {
    this.g = Maps.newLinkedHashMap();
    this.a('Minecraft Version', ab.b().c());
    this.a('Minecraft Version ID', ab.b().b());
    this.a('Operating System', d);
    this.a('Java Version', e);
    this.a('Java VM Version', f);
    this.a('Memory', () => {
      const runtime = Runtime.getRuntime();
      const maxMemory = runtime.maxMemory();
      const totalMemory = runtime.totalMemory();
      const freeMemory = runtime.freeMemory();
      const maxMemoryMiB = maxMemory / a;
      const totalMemoryMiB = totalMemory / a;
      const freeMemoryMiB = freeMemory / a;
      return `${freeMemory} bytes (${freeMemoryMiB} MiB) / ${totalMemory} bytes (${totalMemoryMiB} MiB) up to ${maxMemory} bytes (${maxMemoryMiB} MiB)`;
    });
  }

  a(key, value) {
    this.g.set(key, value);
  }
}
