import peerDepsExternal from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import less from "rollup-plugin-less";
import copy from "rollup-plugin-copy";

export default {
  input: ["src/index.ts", "src/Button/index.ts"],
  output: [
    {
      dir: "build",
      format: "cjs",
      sourcemap: true
    }
  ],
  preserveModules: true, // Important if we want to code split
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    less({
      insert: true
    }),
    copy({
      targets: [
        {
          src: "src/variables.less",
          dest: "build",
          rename: "variables.less"
        },
        {
          src: "src/typography.less",
          dest: "build",
          rename: "typography.less"
        }
      ]
    })
  ]
};
