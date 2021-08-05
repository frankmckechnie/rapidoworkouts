import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Storage } from '@capacitor/storage';
import * as dayjs from 'dayjs';


@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // Store the value
  public async store(storageKey: string, value: any) {
    const data = {
      url: storageKey,
      data: value,
      timeStamp: dayjs().format(),
    };

    const encryptedValue = this.encrypt(JSON.stringify(data));

    return await Storage.set({
      key: storageKey,
      value: encryptedValue,
    });
  }

  // Get the value
  public async get(storageKey: string) {
    const ret = await Storage.get({ key: storageKey });
    if (ret.value !== null) {
      return JSON.parse(this.deEncrypt(ret.value));
    }
    return false;
  }

  // Get the value
  public getObserve(storageKey: string): Observable<any> {
    return from(Storage.get({ key: storageKey })).pipe(
      map((response: any) => {
        if (response.value !== null) {
          return JSON.parse(unescape(atob(response.value)));
        }
        return response.value;
      })
    );
  }

  public async removeStorageItem(storageKey: string) {
    return await Storage.remove({ key: storageKey });
  }

  // Clear storage
  public async clear() {
    await Storage.clear();
  }

  public encrypt(data: any) {
    return environment.encrypt ? btoa(escape(data)) : data;
  }

  public deEncrypt(data) {
    return environment.encrypt ? unescape(atob(data)) : data;
  }

  /**
   * Clear the storage by type
   *
   * @param type
   */
  public async clearStorageByType(type: string): Promise<void> {
    const storage = await Storage.keys();
    const keys = storage?.keys;

    if (!keys.length) {
      return;
    }

    keys.forEach((key) => {
      if (key.indexOf(type) > -1) {
        this.removeStorageItem(key);
      }
    });
  }
}
