'use client';

import { useEffect, useState } from 'react';

import { fetchX } from '@utils/fetchX';

import { COLORS_MASK_KEYS as mask } from '@root/configs';

import { Color, SVG } from 'bibata/app';
import { Image } from 'bibata/core-api/types';

export const BrokenImage: React.FC = () => {
  return (
    <svg
      width='20'
      height='20'
      className='fill-current top-1/2 opacity-20 absolute'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M17.0917 11.1167L15.0083 9.00002C14.9309 8.92191 14.8387 8.85992 14.7371 8.81761C14.6356 8.7753 14.5267 8.75352 14.4167 8.75352C14.3067 8.75352 14.1977 8.7753 14.0962 8.81761C13.9946 8.85992 13.9025 8.92191 13.825 9.00002L11.5 11.3667L9.175 9.00002C9.09753 8.92191 9.00536 8.85992 8.90382 8.81761C8.80227 8.7753 8.69334 8.75352 8.58333 8.75352C8.47333 8.75352 8.3644 8.7753 8.26285 8.81761C8.1613 8.85992 8.06914 8.92191 7.99167 9.00002L6.08333 10.95L4.175 9.00002C4.09753 8.92191 4.00537 8.85992 3.90382 8.81761C3.80227 8.7753 3.69335 8.75352 3.58334 8.75352C3.47333 8.75352 3.3644 8.7753 3.26285 8.81761C3.1613 8.85992 3.06914 8.92191 2.99167 9.00002L0.908335 11.0834C0.832468 11.1626 0.772997 11.2561 0.733335 11.3584C0.690634 11.4585 0.667985 11.5661 0.666668 11.675V14.8334C0.666668 15.4964 0.930061 16.1323 1.3989 16.6011C1.86774 17.07 2.50363 17.3334 3.16667 17.3334H14.8333C15.4964 17.3334 16.1323 17.07 16.6011 16.6011C17.0699 16.1323 17.3333 15.4964 17.3333 14.8334V11.7084C17.332 11.5995 17.3094 11.4919 17.2667 11.3917C17.227 11.2894 17.1675 11.1959 17.0917 11.1167ZM15.6667 14.8334C15.6667 15.0544 15.5789 15.2663 15.4226 15.4226C15.2663 15.5789 15.0543 15.6667 14.8333 15.6667H3.16667C2.94565 15.6667 2.73369 15.5789 2.57741 15.4226C2.42113 15.2663 2.33334 15.0544 2.33334 14.8334V12.05L3.58334 10.8L5.49167 12.7167C5.56914 12.7948 5.6613 12.8568 5.76285 12.8991C5.8644 12.9414 5.97333 12.9632 6.08333 12.9632C6.19334 12.9632 6.30227 12.9414 6.40382 12.8991C6.50536 12.8568 6.59753 12.7948 6.675 12.7167L8.58333 10.8L10.9083 13.1667C10.9858 13.2448 11.078 13.3068 11.1795 13.3491C11.2811 13.3914 11.39 13.4132 11.5 13.4132C11.61 13.4132 11.7189 13.3914 11.8205 13.3491C11.922 13.3068 12.0142 13.2448 12.0917 13.1667L14.4167 10.8334L15.6667 12.0834V14.8334ZM14.8333 0.666687H3.16667C2.50363 0.666687 1.86774 0.930079 1.3989 1.39892C0.930061 1.86776 0.666668 2.50365 0.666668 3.16669V7.55002C0.657986 7.62477 0.657986 7.70027 0.666668 7.77502C0.666668 7.77502 0.666668 7.83335 0.666668 7.85835C0.718843 7.98867 0.80309 8.10369 0.911593 8.19275C1.02009 8.28181 1.14934 8.34202 1.28732 8.36778C1.42531 8.39355 1.56757 8.38405 1.7009 8.34015C1.83423 8.29625 1.95431 8.21939 2.05 8.11669L3.58334 6.63335L5.49167 8.55002C5.56914 8.62813 5.6613 8.69012 5.76285 8.73243C5.8644 8.77474 5.97333 8.79652 6.08333 8.79652C6.19334 8.79652 6.30227 8.77474 6.40382 8.73243C6.50536 8.69012 6.59753 8.62813 6.675 8.55002L8.58333 6.63335L10.9083 9.00002C10.9858 9.07813 11.078 9.14012 11.1795 9.18243C11.2811 9.22474 11.39 9.24652 11.5 9.24652C11.61 9.24652 11.7189 9.22474 11.8205 9.18243C11.922 9.14012 12.0142 9.07813 12.0917 9.00002L14.4167 6.66669L15.8917 8.15002C15.9874 8.25272 16.1074 8.32959 16.2408 8.37348C16.3741 8.41738 16.5164 8.42689 16.6543 8.40112C16.7923 8.37535 16.9216 8.31514 17.0301 8.22608C17.1386 8.13703 17.2228 8.022 17.275 7.89169C17.279 7.86685 17.279 7.84152 17.275 7.81669C17.3043 7.74216 17.3212 7.66334 17.325 7.58335V3.16669C17.325 2.50509 17.0628 1.87046 16.5957 1.40186C16.1287 0.933258 15.4949 0.668892 14.8333 0.666687ZM15.6667 5.53335L15.0083 4.83335C14.9309 4.75525 14.8387 4.69325 14.7371 4.65094C14.6356 4.60864 14.5267 4.58685 14.4167 4.58685C14.3067 4.58685 14.1977 4.60864 14.0962 4.65094C13.9946 4.69325 13.9025 4.75525 13.825 4.83335L11.5 7.20002L9.175 4.83335C9.09753 4.75525 9.00536 4.69325 8.90382 4.65094C8.80227 4.60864 8.69334 4.58685 8.58333 4.58685C8.47333 4.58685 8.3644 4.60864 8.26285 4.65094C8.1613 4.69325 8.06914 4.75525 7.99167 4.83335L6.08333 6.78335L4.175 4.83335C4.09753 4.75525 4.00537 4.69325 3.90382 4.65094C3.80227 4.60864 3.69335 4.58685 3.58334 4.58685C3.47333 4.58685 3.3644 4.60864 3.26285 4.65094C3.1613 4.69325 3.06914 4.75525 2.99167 4.83335L2.33334 5.53335V3.16669C2.33334 2.94567 2.42113 2.73371 2.57741 2.57743C2.73369 2.42115 2.94565 2.33335 3.16667 2.33335H14.8333C15.0543 2.33335 15.2663 2.42115 15.4226 2.57743C15.5789 2.73371 15.6667 2.94567 15.6667 3.16669V5.53335Z' />
    </svg>
  );
};

type Props = {
  svg: SVG;
  color: Color;
  delay: number;
  onLoad?: (image: Image) => void;
};

export const CursorCard: React.FC<Props> = (props) => {
  const { base, outline, watch } = props.color;

  const [loading, setLoading] = useState<boolean>(true);

  const [svg, setSvg] = useState<string | null>();
  const [frames, setFrames] = useState<string[]>([]);
  const [frameIndex, setFrameIndex] = useState<number>(0);

  const c = encodeURIComponent(
    JSON.stringify({
      [mask.base]: base,
      [mask.outline]: outline,
      [mask.watch]: watch || base
    })
  );

  const fetchSvgs = async () => {
    const l: string[] = [];
    for (const id of props.svg.ids) {
      const url = `/api/svg/${id}?color=${c}&display`;
      let res = await fetchX(url, { group: 'images' });

      if (res.status !== 200) {
        const r = await res.json();
        throw new Error(r['error']);
      } else {
        const frame = await res.text();
        l.push(frame);
      }
    }
    return l;
  };

  useEffect(() => {
    setLoading(true);
    setFrames([]);
    setSvg('');

    const fetchSvg = async () => {
      try {
        const list = await fetchSvgs();
        setFrames([...list]);
        setSvg(list[0]);
      } catch (e) {
        console.error(e);
      }
      setLoading(false);
    };

    fetchSvg();
  }, [props.color, props.svg]);

  // Use SVG sprites to reduce the number of HTTP requests
  // TODO: Fix Buggy Animation, Browser keep reloading when Any link is clicked
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (props.svg.isAnimated && loading === false) {
        if (frameIndex < frames.length - 1) {
          setFrameIndex(frameIndex + 1);
        } else {
          setFrameIndex(0);
        }
        setSvg(frames[frameIndex]);
      }
    }, props.delay);

    return () => clearInterval(intervalId);
  }, [loading, frameIndex, props.delay]);

  useEffect(() => {
    if (props.onLoad && !loading && frames) {
      const codes: string[] = [];

      frames.forEach((f) => {
        codes.push(
          f.replace('width="100%" height="100%"', 'width="256" height="256"')
        );
      });

      props.onLoad({ name: props.svg.name, frames: codes });
    }
  }, [loading, frames]);

  return (
    <div className='mb-4 overflow-hidden rounded-3xl bg-white/[0.05] border-white/[.1] border'>
      <div className='w-full h-40 mb-4 relative'>
        <div
          className={`w-full h-full bg-gray-300/[.3] ${
            loading ? 'animate-pulse bg-white/[.2]' : 'bg-white/[.05]'
          }`}
        />

        <div
          className={`${
            !loading ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-500 flex justify-center`}>
          {svg ? (
            <span
              className='object-none h-full p-4 top-0 absolute'
              hidden={loading}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ) : (
            <div className='object-center' hidden={loading}>
              <BrokenImage />
            </div>
          )}
        </div>
      </div>

      <div className='text-center'>
        <p className='mb-2'>{props.svg.name}</p>
      </div>
    </div>
  );
};
