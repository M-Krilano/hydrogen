When building your custom storefront, it can be useful to have access to static assets that aren't already hosted elsewhere, like images. This guide describes how to reference and serve static assets in Hydrogen.

## How static assets work

Static assets are files that your app downloads from a server. In Hydrogen, you import a static asset into your JavaScript runtime as a URL. When you import a static asset, it returns the resolved public URL where the asset is served.

The following example shows how to render the `/src/icon.png` image:

{% codeblock file, filename: "src/components/Hero.client.jsx" %}

```js
import icon from '../icon.png';
import {Image} from '@shopify/hydrogen/client';

export default function Hero() {
  return <Image src={icon} width="100" height="50" />;
}
```

{% endcodeblock %}

> Tip:
> You can also import static assets as an explicit URL or as a string. For more information, refer to [Vite's guide](https://vitejs.dev/guide/assets.html#explicit-url-imports).

## Change the base URL

If you want to serve your static assets from a different domain or path, then you can specify the `HYDROGEN_ASSET_BASE_URL` environment variable when building your project.

For example, running the following command will cause references to `/icon.png` to instead reference `https://mycdn.example/path/to/folder/icon.png` in the compiled code.

{% codeblock terminal %}

```bash
$ HYDROGEN_ASSET_BASE_URL=https://mycdn.example/path/to/folder yarn build
```

{% endcodeblock %}

> Note:
> Make sure to check the `dist/client/index.html` file to verify that the URLs point to the provided URL.

## Considerations and limitations

You should only import assets, such as styles or images, from [client components](/custom-storefronts/hydrogen/framework/react-server-components#component-types). Any static assets that are referenced in server components, or shared components that are rendered from server components, won't display in the browser.

## Next steps

- Learn about [React Server Components](/custom-storefronts/hydrogen/framework/react-server-components), an opinionated data-fetching and rendering workflow for React apps.
- Learn how the [page server component](/custom-storefronts/hydrogen/framework/pages) receives props, which includes custom versions of `request` and `response`.
