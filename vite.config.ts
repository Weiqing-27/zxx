import { defineConfig, loadEnv } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import { modifyConfig } from './src/assets/js/modifyManifest';

// https://vitejs.dev/config/
//随机时间戳
const Timestamp = new Date().getTime();
//在 vite.config.ts 中（node环境）不能直接使用环境变量，需包裹一层
export default ({ mode }: any) => {
    let env = loadEnv(mode, process.cwd());
    //动态修改manifest配置文件参数
    modifyConfig('h5.router.base', env.VITE_APP_ROUTER_BASE);
    return defineConfig({
        css: {
            preprocessorOptions: {
                scss: {
                    // 自定义的主题色
                    additionalData: `@use "@/assets/css/variables.scss" as *;`
                }
            }
        },
        server: {
         
        },
        build: {
            sourcemap: false, // 输出.map文件,默认是false
            rollupOptions: {
                //打包文件名增加时间戳使客户端强制拉取最新的文件
                output: {
                    chunkFileNames: `assets/js/[name].[hash]${Timestamp}.js`,
                    entryFileNames: `assets/js/[name].[hash]${Timestamp}.js`,
                    assetFileNames: `assets/[ext]/[name].[hash]${Timestamp}.[ext]`
                }
            }
        },
        plugins: [uni()]
    });
};
