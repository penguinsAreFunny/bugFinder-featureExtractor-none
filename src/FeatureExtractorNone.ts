import {DatasetAFE, DatasetAP, FeatureExtractor, TraceAFE} from "bugfinder-framework";
import {inject, injectable} from "inversify";
import {BUGFINDER_FEATUREEXTRACTOR_NONE_TYPES} from "./TYPES";

@injectable()
export class FeatureExtractorNone implements FeatureExtractor {

    @inject(BUGFINDER_FEATUREEXTRACTOR_NONE_TYPES.featureExtractorName)
    featureExtractorName: string

    @inject(BUGFINDER_FEATUREEXTRACTOR_NONE_TYPES.featureExtractorVersion)
    featureExtractorVersion: string

    @inject(BUGFINDER_FEATUREEXTRACTOR_NONE_TYPES.additionalDescription)
    additionalDescription: string

    async extractFeatures(dataset: DatasetAP): Promise<DatasetAFE> {
        const traceAP = dataset.traceAP
        const traceAFE: TraceAFE = {
            annotatorName: traceAP.annotatorName,
            annotatorVersion: traceAP.annotatorVersion,
            featureExtractorName: this.featureExtractorName,
            featureExtractorVersion: this.featureExtractorVersion,
            locPreprocessName: traceAP.locPreprocessName,
            locPreprocessVersion: traceAP.locPreprocessVersion,
            locRecordName: traceAP.locRecordName,
            locRecordVersion: traceAP.locRecordVersion,
            preprocessorName: traceAP.preprocessorName,
            preprocessorVersion: traceAP.preprocessorVersion,
            quantifierName: traceAP.quantifierName,
            quantifierVersion: traceAP.quantifierVersion
        }
        const datasetAFE = new DatasetAFE(dataset.data, dataset.target, dataset.keys, dataset.featureNames,
            dataset.targetNames, dataset.description + "\n" + this.additionalDescription, traceAFE)
        return datasetAFE
    }

}