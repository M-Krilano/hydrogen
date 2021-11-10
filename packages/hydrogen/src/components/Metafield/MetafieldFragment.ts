import * as Types from '../../graphql/types/types';

import {MoneyFragmentFragment} from '../Money/MoneyFragment';
import {ImageFragmentFragment} from '../Image/ImageFragment';
export type MetafieldFragmentFragment = {__typename?: 'Metafield'} & Pick<
  Types.Metafield,
  'id' | 'type' | 'namespace' | 'key' | 'value' | 'description'
> & {
    reference?: Types.Maybe<
      | ({__typename?: 'MediaImage'} & Pick<
          Types.MediaImage,
          'id' | 'mediaContentType'
        >)
      | ({__typename?: 'Page'} & Pick<Types.Page, 'id'>)
      | ({__typename?: 'Product'} & Pick<
          Types.Product,
          'handle' | 'id' | 'title'
        > & {
            compareAtPriceRange: {__typename?: 'ProductPriceRange'} & {
              maxVariantPrice: {__typename?: 'MoneyV2'} & MoneyFragmentFragment;
              minVariantPrice: {__typename?: 'MoneyV2'} & MoneyFragmentFragment;
            };
            priceRange: {__typename?: 'ProductPriceRange'} & {
              maxVariantPrice: {__typename?: 'MoneyV2'} & MoneyFragmentFragment;
              minVariantPrice: {__typename?: 'MoneyV2'} & MoneyFragmentFragment;
            };
            variants: {__typename?: 'ProductVariantConnection'} & {
              edges: Array<
                {__typename?: 'ProductVariantEdge'} & {
                  node: {__typename?: 'ProductVariant'} & Pick<
                    Types.ProductVariant,
                    'id' | 'title' | 'availableForSale'
                  > & {
                      image?: Types.Maybe<
                        {__typename?: 'Image'} & ImageFragmentFragment
                      >;
                      priceV2: {__typename?: 'MoneyV2'} & MoneyFragmentFragment;
                      compareAtPriceV2?: Types.Maybe<
                        {__typename?: 'MoneyV2'} & MoneyFragmentFragment
                      >;
                      selectedOptions: Array<
                        {__typename?: 'SelectedOption'} & Pick<
                          Types.SelectedOption,
                          'name' | 'value'
                        >
                      >;
                    };
                }
              >;
            };
          })
      | ({__typename?: 'ProductVariant'} & Pick<Types.ProductVariant, 'id'>)
    >;
  };
