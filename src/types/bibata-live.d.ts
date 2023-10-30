declare module 'bibata-live/app' {
  type SVG = {
    name: string;
    ids: string[];
    isAnimated: boolean;
  };

  type Color = {
    base: string;
    outline: string;
    watch?: string;
  };

  type Colors = {
    [name: string]: Color;
  };
}

declare module 'bibata-live/misc' {
  type Goals = {
    monthlySponsorshipInCents: number;
    percentComplete: number;
    title: string;
    targetValueInDollar: number;
  };

  type DownloadCounts = {
    total: number | null;
    count: number;
  };
}

declare module 'bibata-live/db' {
  type BibataType = 'Modern' | 'Original';

  type Platform = 'x11' | 'win';

  type UserRole = 'USER' | 'PRO' | 'ADMIN';

  type DBUser = {
    id?: string;
    userId: string;
    login: string;
    name: string | null;
    email: string | null;
    url: string;
    avatarUrl: string;

    role: UserRole;
    index?: number;
    totalDownloadCount: number | null;
  };

  type DBDownload = {
    id?: string;
    baseColor: string;
    outlineColor: string;
    watchBGColor: string;

    index?: number;
    createdAt?: string;
    updatedAt?: string;

    user?: DBUser;
    userId?: string;
  };
}

declare module 'bibata-live/core-api/types' {
  type Image = {
    name: string;
    frames: string[];
  };

  type AuthToken = {
    id: string;
    role: UserRole;
    token: string;
  };

  type JWTToken = {
    token_id: string;
    id: string | null;
    userId: string | null;
    login: string | null;
    name: string | null;
    url: string | null;
    email: string | null;
    avatarUrl: string | null;
    role: UserRole;
    totalDownloadCount: number | null;
  };
}

declare module 'bibata-live/core-api/responses' {
  type AuthError = {
    status: number;
    error: string[];
  };

  type UploadResponse = {
    status: number;
    id: string;
    files: string[];
    error: string[];
  };

  type GetSessionResponse = {
    id: string;
    role: UserRole;
  };

  type DeleteSessionResponse = {
    id: string | null;
  };

  type DownloadError = {
    status: number;
    id: string;
    error: string[];
  };
}
